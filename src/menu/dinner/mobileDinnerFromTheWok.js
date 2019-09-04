import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileDinnerFromTheWok = () => {
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
        <Breadcrumb.Item>From the Wok</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">From the Wok</Divider>
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
      <h2 className="menu-display-name">Thai Cashew Nuts</h2>
      <p className="menu-display-description">
        Meat or Tofu stir-fried with chili oil and roasted cashew nuts, onion,
        broccoli, fresh carrot and bell peppers.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Garlic and Pepper</h2>
      <p className="menu-display-description">
        A delicious stir-fried with garlic and ground black pepper, presented in
        bed of cabbages.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Vegetable Fried Rice</h2>
      <p className="menu-display-description">
        Stir-fried rice with egg, and mixed vegetables.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Thai Fried Rice</h2>
      <p className="menu-display-description">
        Stir-fried rice with egg, onion, spring onions and your choice of meat.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Basil Fried Rice</h2>
      <p className="menu-display-description">
        Stir-fried rice with egg, onion, spring onions, basil and your choice of
        meats.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Crab Fried Rice</h2>
      <p className="menu-display-description">
        Stir-fried rice with crab meat, egg, onion and spring onions.
      </p>
      <p className="menu-price text-align-center">
        Lunch $13.95
        <br /> Dinner $15.95
      </p>
      <br />
      <h2 className="menu-display-name">Yellow Curry Fried Rice</h2>
      <p className="menu-display-description">
        Traditional fried rice with onions, cabbage, napa and scallions and the
        addition of a wonderful yellow curry flavor.
      </p>
      <p className="menu-price text-align-center">
        Lunch $13.95
        <br /> Dinner $15.95
      </p>
      <br />
      <h2 className="menu-display-name">Seafood Fried Rice</h2>
      <p className="menu-display-description">
        Our signature fried rice made with jumbo shrimp, scallops, imatation
        crab meat and squid.
      </p>
      <p className="menu-price text-align-center">
        Lunch $13.95
        <br /> Dinner $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Crispy Garlic Shrimp</h2>
      <p className="menu-display-description">
        Jumbo shrimp flash fried and then sautéed in our delicious garlic sauce.
        Served over a bed of steamed vegetables.
      </p>
      <p className="menu-price text-align-center">$18.95</p>
      <br />
      <h2 className="menu-display-name">Green Bean Chicken</h2>
      <p className="menu-display-description">
        Sautéed with green beans in a spicy curry sauce.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Pad Pak Rom</h2>
      <p className="menu-display-description">
        Stir-fried mixed vegetable with homemade garlic brown sauce.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />

      <h2 className="menu-display-name">Pad Khing</h2>
      <p className="menu-display-description">
        Meat or Tofu Stir fried with fresh ginger root, chinese mushroom, onion,
        scallion and bell pepper.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Pad Pong Karee Rom</h2>
      <p className="menu-display-description">
        Combination of seafood (Jumbo Shrimp, Scallop, Squid, Crab meat)
        stir-fried with yellow curry powder, egg, onion, celery, bell pepper,
        spring onion and napa.
      </p>
      <p className="menu-price text-align-center">
        Lunch $13.95
        <br /> Dinner $18.95
      </p>
      <br />
    </React.Fragment>
  )
}

export default MobileDinnerFromTheWok
