import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileDinnerSoupsSalads = () => {
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
        <Breadcrumb.Item>Soups and Salads</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Soups and Salads</Divider>
      <h2 className="menu-display-name">Thai Noodle Soup</h2>
      <p className="menu-display-description">
        Rice noodles and vegetables in a savory broth.
      </p>
      <p className="menu-price text-align-center">
        Chicken, Pork, or Tofu $11.95 <br /> Beef or Shrimp $14.95
        <br /> Seafood $18.95
      </p>
      <br />
      <h2 className="menu-display-name">Tom Yum Soup</h2>
      <p className="menu-display-description">
        A signature Thai soup of straw mushrooms, fresh chilies, kaffir leaves,
        lemongrass, galangal, and a splash of lime juice. Served in a spicy
        broth and topped with a hint of cilantro and spring onions.
      </p>
      <p className="menu-price text-align-center">
        Bowl $6.95 (Seafood $8.95) <br />
        <br /> Pot $10.95 (Seafood $18.95)
      </p>
      <br />
      <h2 className="menu-display-name">Tom Kha Soup</h2>
      <p className="menu-display-description">
        A rich coconut milk broth flavored with lemongrass, kaffir leaves, fresh
        chilies, galangal, and sprinkled with cilantro and spring onions.
      </p>
      <p className="menu-price text-align-center">
        Bowl $6.95 (Seafood $8.95) <br />
        <br /> Pot $10.95 (Seafood $18.95)
      </p>
      <br />
      <h2 className="menu-display-name">Yum Woon Sen</h2>
      <p className="menu-display-description">
        A traditional spicy Thai salad where the meat or Tofu are first cooked
        then tossed together with glass noodles, shallots, tomatoes, celery and
        cilantro.
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
    </React.Fragment>
  )
}

export default MobileDinnerSoupsSalads
