import React from 'react'
import { Breadcrumb, Icon, Divider } from 'antd'
import { Link } from 'react-router-dom'
import Thumbnail from '../../components/thumbnail'

const MobileLunchSides = () => {
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
        <Breadcrumb.Item>Sides</Breadcrumb.Item>
      </Breadcrumb>
      <Divider className="menu-display-category">Sides</Divider>
      <h2 className="menu-display-name">Fried Rice</h2>
      <p className="menu-price text-align-center">$3.50</p>
      <br />
      <h2 className="menu-display-name">Streamed Rice</h2>
      <p className="menu-price text-align-center">$2.50</p>
      <br />
      <h2 className="menu-display-name">Sticky Rice</h2>
      <p className="menu-price text-align-center">$3.00</p>
      <br />
      <h2 className="menu-display-name">Streamed Vegetables</h2>
      <p className="menu-price text-align-center">$3.00</p>
      <br />
      <h2 className="menu-display-name">Extra Sauce</h2>
      <p className="menu-price text-align-center">$0.50</p>
      <br />
    </React.Fragment>
  )
}

export default MobileLunchSides
