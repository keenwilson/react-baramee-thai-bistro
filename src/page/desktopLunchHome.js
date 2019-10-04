import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Breadcrumb, Icon } from 'antd'

const DesktopLunchHome = () => {
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
        <Breadcrumb.Item>Lunch</Breadcrumb.Item>
      </Breadcrumb>
      <div className="narrative ">
        <h1 className="underline-60">Lunch Menu</h1>
        <Button block className="menu-button">
          <Link to="/menu/lunch/appetizers" className="menu-meal">
            Appetizers
          </Link>
        </Button>

        <Button block className="menu-button">
          <Link to="/menu/lunch/salads" className="menu-meal">
            Salads
          </Link>
        </Button>

        <Button block className="menu-button">
          <Link to="/menu/lunch/fried-rice" className="menu-meal">
            Fried Rice
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/lunch/from-the-wok" className="menu-meal">
            From the Wok
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/lunch/noodles" className="menu-meal">
            Noodles
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/lunch/soups" className="menu-meal">
            Soups
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/lunch/curries" className="menu-meal">
            Curries
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/lunch/sides" className="menu-meal">
            Sides
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/lunch/desserts" className="menu-meal">
            Desserts
          </Link>
        </Button>
        <Button block className="menu-button">
          <Link to="/menu/lunch/drinks" className="menu-meal">
            Drinks
          </Link>
        </Button>
      </div>
    </React.Fragment>
  )
}

export default DesktopLunchHome
