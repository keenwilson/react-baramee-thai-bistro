import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'

const MobileLunchDesserts = () => {
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
        <Breadcrumb.Item>Desserts</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Desserts</Divider>
      <h2 className="menu-display-name">Sweet Mango Sticky Rice</h2>
      <p className="menu-display-description">
        Mango sticky rice is a traditional Thai dessert made with glutinous
        rice, sweet mango and coconut milk.
      </p>
      <p className="menu-price text-align-center">$8.00</p>
      <br />
      <h2 className="menu-display-name">Taro Ice Cream</h2>
      <p className="menu-price text-align-center">$5.00</p>
      <br />
      <h2 className="menu-display-name">Coconut Ice Cream</h2>
      <p className="menu-price text-align-center">$5.00</p>
      <br />
      <h2 className="menu-display-name">Mango Ice Cream</h2>
      <p className="menu-price text-align-center">$5.00</p>
      <br />
      <h2 className="menu-display-name">Fried Banana with Ice Cream</h2>
      <p className="menu-price text-align-center">$6.00</p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchDesserts
