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
      <h2 className="menu-display-name">
        Tiger Cry Beef or Chicken as a Salad
      </h2>
      <p className="menu-display-description">
        Enjoy our signature Tiger Cry Beef as a light meal. We add extra sliced
        cabbage and more of our spicy homemade chili sauce for a quick and
        delicious salad.
        <br />
        <Thumbnail
          imagePath="https://bloximages.newyork1.vip.townnews.com/feastmagazine.com/content/tncms/assets/v3/editorial/8/a4/8a409fdc-4501-11e9-b450-f3ae55d79153/5c880ff4caae8.image.jpg"
          imageAlt="Tiger Cry Beef"
        />
        <br />
        <br />
        Tiger Cry Beef is a spicy dish of grilled sirloin of beef, thinly sliced
        and marinated with a hint of garlic, black pepper, garnished with
        cabbage and served with spicy chili homemade sauce.
      </p>
      <p className="menu-price text-align-center">$9.95</p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchSalad
