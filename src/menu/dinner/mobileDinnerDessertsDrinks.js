import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileDinnerDessertsDrinks = () => {
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
        <Breadcrumb.Item>Desserts and Drinks</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Desserts</Divider>
      <h2 className="menu-display-name">Sweet Mango Sticky Rice</h2>
      <p className="menu-display-description">
        Mango sticky rice is a traditional Thai dessert made with glutinous
        rice, sweet mango and coconut milk.
      </p>
      <p className="menu-price text-align-center">$7.00</p>
      <br />
      <h2 className="menu-display-name">Taro Ice Cream</h2>
      <p className="menu-price text-align-center">$4.00</p>
      <br />
      <h2 className="menu-display-name">Coconut Ice Cream</h2>
      <p className="menu-price text-align-center">$4.00</p>
      <br />
      <h2 className="menu-display-name">Mango Ice Cream</h2>
      <p className="menu-price text-align-center">$4.00</p>
      <br />
      <h2 className="menu-display-name">Fried Banana with Ice Cream</h2>
      <p className="menu-price text-align-center">$5.50</p>
      <br />
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
      <h2 className="menu-display-name">Coca-Cola Products Fountain Drinks</h2>
      <p className="menu-display-description">
        Coke, Diet Coke, Coke Zero, Dr. Pepper, Minute Maid Lemonade, Sprite,
        Orange Fanta, Barq's Root Beer
      </p>
      <p className="menu-price text-align-center">$2.99</p>
      <br />
    </React.Fragment>
  )
}

export default MobileDinnerDessertsDrinks
