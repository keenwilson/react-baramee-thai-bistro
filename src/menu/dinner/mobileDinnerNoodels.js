import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileDinnerNoodles = () => {
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
        <Breadcrumb.Item>Noodles</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Noodles</Divider>
      <h2 className="menu-display-name">Pad Sew Eaew</h2>
      <p className="menu-display-description">
        Stir-fried flat noodles in dark, rich and sweet soy sauce with broccoli
        and Gai lan.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
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
      <h2 className="menu-display-name">Pad Key Maw</h2>
      <p className="menu-display-description">
        A spicy noodle dish, stir-fried flat noodles with fresh chili, garlic,
        bell pepper, and basil leaves.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Pad Woon Sen</h2>
      <p className="menu-display-description">
        Stir-fried glass noodle with meats or tofu, bean sprouts, spring onion
        and cabbage.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Rad Na Talay</h2>
      <p className="menu-display-description">
        Wide rice noodles with vegetables and your choice of protein, stir-fried
        in a dark soy sauce and covered with a thick, savory sauce. A favorite
        lunch item in Thailand.
      </p>
      <p className="menu-price text-align-center">$18.95</p>
      <br />
    </React.Fragment>
  )
}

export default MobileDinnerNoodles
