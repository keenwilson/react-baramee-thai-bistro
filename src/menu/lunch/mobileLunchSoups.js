import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileLunchSoups = () => {
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
        <Breadcrumb.Item>Soups</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Soups</Divider>
      <h2 className="menu-display-name">Thai Noodle Soup</h2>
      <p className="menu-display-description">
        Rice noodles and vegetables in a savory broth.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
        <br /> Seafood $15.99
      </p>
      <br />
      <Divider />
      <h2 className="menu-display-name">Tom Yum Soup</h2>
      <p className="menu-display-description">
        A signature Thai soup of straw mushrooms, fresh chilies, kaffir leaves,
        lemongrass, galangal, and a splash of lime juice. Served in a spicy
        broth and topped with a hint of cilantro and spring onions.
      </p>
      <p className="menu-price text-align-center">
        Bowl: <br />
        Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
        <br /> Seafood $15.99
      </p>
      <p className="menu-price text-align-center">
        Pot: <br />
        Chicken, Pork, or Tofu $12.99 <br /> Beef or Shrimp $15.99
        <br /> Seafood $19.99
      </p>
      <br />
      <Divider />
      <h2 className="menu-display-name">Tom Kha Soup</h2>
      <p className="menu-display-description">
        A rich coconut milk broth flavored with lemongrass, kaffir leaves, fresh
        chilies, galangal, and sprinkled with cilantro and spring onions.
      </p>
      <p className="menu-price text-align-center">
        Bowl: <br />
        Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
        <br /> Seafood $15.99
      </p>
      <p className="menu-price text-align-center">
        Pot: <br />
        Chicken, Pork, or Tofu $12.99 <br /> Beef or Shrimp $15.99
        <br /> Seafood $19.99
      </p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchSoups
