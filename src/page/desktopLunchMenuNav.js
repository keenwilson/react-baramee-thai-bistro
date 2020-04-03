import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'

const DesktopLunchMenuNav = () => {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['1']}
      mode="inline"
    >
      <Menu.Item key="1">
        <Link to="/menu/lunch/appetizers" className="menu-meal">
          Appetizers
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/menu/lunch/curries" className="menu-meal">
          Curries
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/menu/lunch/from-the-wok" className="menu-meal">
          From the Wok
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/menu/lunch/soups" className="menu-meal">
          Soups
        </Link>
      </Menu.Item>

      <Menu.Item key="5">
        <Link to="/menu/lunch/salads" className="menu-meal">
          Salads
        </Link>
      </Menu.Item>

      <Menu.Item key="6">
        <Link to="/menu/lunch/noodles" className="menu-meal">
          Noodles
        </Link>
      </Menu.Item>

      <Menu.Item key="7">
        <Link to="/menu/lunch/fried-rice" className="menu-meal">
          Fried Rice
        </Link>
      </Menu.Item>
      <Menu.Item key="8">
        <Link to="/menu/lunch/sides" className="menu-meal">
          Sides
        </Link>
      </Menu.Item>
      <Menu.Item key="9">
        <Link to="/menu/lunch/desserts" className="menu-meal">
          Desserts
        </Link>
      </Menu.Item>
      <Menu.Item key="10">
        <Link to="/menu/lunch/drinks" className="menu-meal">
          Drinks
        </Link>
      </Menu.Item>
    </Menu>
  )
}

export default DesktopLunchMenuNav
