import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileLunchFriedRice = () => {
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
        <Breadcrumb.Item>Fried Rice</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Fried Rice</Divider>
      <h2 className="menu-display-name">Thai Fried Rice</h2>
      <p className="menu-display-description">
        Stir-fried rice with egg, onion, spring onions and your choice of meat.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
        <br /> Seafood $13.95
      </p>
      <br />
      <h2 className="menu-display-name">Basil Fried Rice</h2>
      <p className="menu-display-description">
        Stir-fried rice with egg, onion, spring onions, basil and your choice of
        meats.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
        <br /> Seafood $13.95
      </p>
      <br />
      <h2 className="menu-display-name">Vegetable Fried Rice</h2>
      <p className="menu-display-description">
        Stir-fried rice with egg, and mixed vegetables.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
        <br /> Seafood $13.95
      </p>
      <br />
      <h2 className="menu-display-name">Pineapple Fried Rice</h2>
      <p className="menu-display-description">
        Fried rice with shrimp, egg and pineapple combined with cashew nuts and
        raisins.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork,Tofu, or Vegan $12.95 <br /> Beef or Shrimp $13.95
        <br /> Seafood $14.95
      </p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchFriedRice
