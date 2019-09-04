import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Redirect, Route, Link } from 'react-router-dom'
import Thumbnail from '../../components/thumbnail'
const MobileLunchAppetizers = () => {
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
        <Breadcrumb.Item>Appetizers</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Appetizers</Divider>
      <h2 className="menu-display-name">Crab Rangoon (8 Pcs)</h2>
      <p className="menu-display-description">
        Fried wonton wrapped and filled with blend of cream-cheese, imitation
        crab meat and garlic flavored seasoning served with homemade sweet chili
        sauce.
      </p>
      <p className="menu-price text-align-center">$6.95</p>
      <br />
      <h2 className="menu-display-name">Chicken Satay (4 Skewers)</h2>
      <p className="menu-display-description">
        Skewers of tender marinated chicken barbecued over charcoal and served
        with peanut sauce and cucumber dip.
      </p>
      <p className="menu-price text-align-center">$8.95</p>
      <br />
      <h2 className="menu-display-name">Crispy Sping Roll (3 Pcs)</h2>
      <p className="menu-display-description">
        Deep fried spring rolls stuff with minced chicken or only vegetables,
        egg, glass noodle and mixed vegetable, served with homemade sweet chili
        sauce.
      </p>
      <p className="menu-price text-align-center">$6.95</p>
      <br />
      <h2 className="menu-display-name">Soft Sping Roll (3 Pcs)</h2>
      <p className="menu-display-description">
        Fresh spring rolls made with chicken or only vegetables, noodles, bean
        sprouts, and lettuce wrapped in rice paper. Served with sweet chili
        sauce and crushed roasted peanuts.
      </p>
      <p className="menu-price text-align-center">$6.95</p>
      <br />
      <h2 className="menu-display-name">Baramee Thai Roll (3 Pcs)</h2>
      <p className="menu-display-description">
        Crab meat, cream-cheese, cucumber, green leaf lettuce, bean sprout, and
        carrot wrapped in rice paper served with sweet chili sauce and crushed
        roasted peanuts.
      </p>
      <p className="menu-price text-align-center">$8.95</p>
      <br />

      <h2 className="menu-display-name">Tiger Cry Beef</h2>
      <p className="menu-display-description">
        Spicy dish of grilled sirloin of beef, thinly sliced and marinated with
        a hint of garlic, black pepper, garnished with cabbage and served with
        spicy chili homemade sauce.
      </p>
      <p className="menu-price text-align-center">$9.95</p>
      <br />
      <h2 className="menu-display-name">Crispy Tofu</h2>
      <p className="menu-display-description">
        Delicately fried, and complemented with a homemade chili sauce.
      </p>
      <p className="menu-price text-align-center">$7.95</p>
      <br />
      <h2 className="menu-display-name">Golden Calamari</h2>
      <p className="menu-display-description">
        Crispy tempura style calamari with a hint of spices and green onions.
        Served with sriracha dipping sauce.
      </p>
      <p className="menu-price text-align-center">$8.95</p>
      <br />
      <h2 className="menu-display-name">Baramee Thai Wings</h2>
      <p className="menu-display-description">
        Marinated in a spicy garlic sauce with fresh basil. Deep fried to
        perfection.
      </p>
      <p className="menu-price text-align-center">$8.95</p>
      <br />
      <h2 className="menu-display-name">Spring Roll Deluxe</h2>
      <p className="menu-display-description">
        Two of our soft spring rolls and two of our crispy spring rolls.
      </p>
      <p className="menu-price text-align-center">$8.95</p>
      <br />
      <h2 className="menu-display-name">Baramee Thai Platter</h2>
      <p className="menu-display-description">
        A delicious of Thai mixed appetizers with Crab Rangoon (4 Pcs), Soft
        Spring Roll (2 Pcs) and Crispy Spring roll (2 Pcs)
      </p>

      <p className="menu-price text-align-center">$10.95</p>
      <br />
      <h2 className="menu-display-name">Edamame</h2>
      <p className="menu-display-description">
        Lightly salted and steamed soy beans.
      </p>
      <p className="menu-price text-align-center">$5.95</p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchAppetizers
