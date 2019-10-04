import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Breadcrumb, Icon } from 'antd'

const DesktopDinnerHome = () => {
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
        <Breadcrumb.Item>Dinner</Breadcrumb.Item>
      </Breadcrumb>
      <div className="narrative">
        <h1>Dinner Menu</h1>
        <Button block className="menu-button">
          <Link to="/menu/dinner/appetizers" className="menu-meal">
            Appetizers
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/dinner/soups-salads" className="menu-meal">
            Soups and Salads
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/dinner/house-favorites" className="menu-meal">
            House Favorites
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/dinner/from-the-wok" className="menu-meal">
            From the Wok
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/dinner/noodles" className="menu-meal">
            Noodles
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/dinner/curries" className="menu-meal">
            Curries
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/dinner/desserts-drinks" className="menu-meal">
            Desserts and Drinks
          </Link>
        </Button>
      </div>
    </React.Fragment>
  )
}

export default DesktopDinnerHome
