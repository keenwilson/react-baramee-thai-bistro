import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileLunchCurries = () => {
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
        <Breadcrumb.Item>Curries</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Curries</Divider>
      <h2 className="menu-display-name">Panang Curry</h2>
      <p className="menu-display-description">
        Our most popular curry. Our delicious coconut milk and peanut panang
        sauce garnished with kaffir lime leaves.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
        <br /> Seafood $15.99
      </p>
      <br />
      <h2 className="menu-display-name">Green Curry</h2>
      <p className="menu-display-description">
        A well know medium hot Thai curry with meat or Tofu, egg plant, cooked
        in green curry paste and coconut milk, garnished with Thai basil leaves.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
        <br /> Seafood $15.99
      </p>
      <br />
      <h2 className="menu-display-name">Red Curry</h2>
      <p className="menu-display-description">
        A medium hot Thai red curry dish with meat or Tofu and young bamboo
        shoot and bell pepper cooked in red curry paste and coconut milk,
        flavored with Thai basil leaves.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
        <br /> Seafood $15.99
      </p>
      <br />
      <h2 className="menu-display-name">Gang Ka Ree</h2>
      <p className="menu-display-description">
        Yellow curry powder with chunk potatoes, carrots, yellow onion, and
        topped with dry garlic.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
        <br /> Seafood $15.99
      </p>
      <br />
      <h2 className="menu-display-name">Gang Massaman</h2>
      <p className="menu-display-description">
        Traditional mild curry dish, meat or tofu cooked slowly with potatoes,
        yellow onions and roasted peanuts.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $10.99 <br /> Beef or Shrimp $12.99
        <br /> Seafood $15.99
      </p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchCurries
