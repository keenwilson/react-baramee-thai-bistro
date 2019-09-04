import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileLunchDrinks = () => {
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
        <Breadcrumb.Item>Drinks</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Drinks</Divider>
      <h2 className="menu-display-name">Bubble Drinks</h2>
      <p className="menu-price text-align-center">$4.00</p>
      <br />
      <h2 className="menu-display-name">Thai Iced Tea</h2>
      <p className="menu-price text-align-center">$3.50</p>
      <br />
      <h2 className="menu-display-name">Thai Iced Coffee</h2>
      <p className="menu-price text-align-center">$3.50</p>
      <br />

      <h2 className="menu-display-name">Hot Tea</h2>
      <p className="menu-price text-align-center">$2.99</p>
      <br />
      <h2 className="menu-display-name">Hot Coffee</h2>
      <p className="menu-price text-align-center">$2.99</p>
      <br />
      <h2 className="menu-display-name">Iced Tea</h2>
      <p className="menu-price text-align-center">$2.99</p>
      <br />
      <h2 className="menu-display-name">Coke Product Fountain Drinks</h2>
      <p className="menu-display-description">
        Coke, Diet Coke, Coke Zero, Dr. Pepper, Minute Maid Lemonade, Sprite,
        Orange Fanta, Barq's Root Beer
      </p>
      <p className="menu-price text-align-center">$2.99</p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchDrinks
