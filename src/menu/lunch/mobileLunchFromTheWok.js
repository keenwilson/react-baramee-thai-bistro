import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileLunchFromTheWok = () => {
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
        <Breadcrumb.Item>From the Wok</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">From the Wok</Divider>
      <h2 className="menu-display-name">Pad Ka Prao (House Favorites)</h2>
      <p className="menu-display-description">
        Stir-fried meat with sweet basil leaves, fresh chili and garlic. Served
        over rice with a pan fried egg.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
        <br /> Seafood $13.95
      </p>
      <br />
      <h2 className="menu-display-name">Thai Cashew Nuts</h2>
      <p className="menu-display-description">
        Meat or Tofu stir-fried with chili oil and roasted cashew nuts, onion,
        broccoli, fresh carrot and bell peppers.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
        <br /> Seafood $13.95
      </p>
      <br />
      <h2 className="menu-display-name">Garlic and Pepper</h2>
      <p className="menu-display-description">
        A delicious stir-fried with garlic and ground black pepper, presented in
        bed of cabbages.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
        <br /> Seafood $13.95
      </p>
      <br />
      <h2 className="menu-display-name">Green Bean Chicken</h2>
      <p className="menu-display-description">
        Sautéed with green beans in a spicy curry sauce.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
        <br /> Seafood $13.95
      </p>
      <br />
      <h2 className="menu-display-name">Pad Pak Rom</h2>
      <p className="menu-display-description">
        Stir-fried mixed vegetable with homemade garlic brown sauce.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
        <br /> Seafood $13.95
      </p>
      <br />

      <h2 className="menu-display-name">Pad Khing</h2>
      <p className="menu-display-description">
        Meat or Tofu Stir fried with fresh ginger root, chinese mushroom, onion,
        scallion and bell pepper.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $9.95 <br /> Beef or Shrimp $12.95
        <br /> Seafood $13.95
      </p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchFromTheWok
